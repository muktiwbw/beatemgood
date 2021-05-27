const state = {
  game: {
    combinationLib: [ 3, 3, 4, 5 ]
  },
  players: [],
  functions: {
    randomizeProblem(combinationCount) {
      const problem = []

      for (let i=0; i<combinationCount; i++) {
        problem.push(Math.floor(Math.random() * 5))
      }

      return problem
    }
  }
}

const getters = {
  getPlayers: state => state.players,
  getGame: state => state.game
}

const actions = {
  initiateGame({ state, commit }) {
    const playerIDs = [0, 1]
    const players = []

    for (let id of playerIDs) {
      const input = []
      const turns = []

      for (let i=0; i<10; i++) {
        input.push([])
        turns.push({
          correct: 0,
          misplaced: 0
        })
      }

      const problem = state.functions.randomizeProblem(state.game.combinationLib[0])

      players.push({
        id,
        stage: 0,
        combination: state.game.combinationLib[0],
        gauge: 100,
        turn: 0,
        problem,
        character: {
          name: 'Test Character',
          ability: 'Tester',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        },
        game: {
          input,
          turns
        }
      })
    }

    commit('setPlayers', players)
  },
  submitInput({ state, commit }, data) {
    const currentRowIdx = state.players[data.playerID].turn
    const currentRow = state.players[data.playerID].game.input[currentRowIdx]
    console.log(currentRowIdx, currentRow)

    if (currentRow.length < state.game.combinationLib[state.players[data.playerID].stage]) {
      commit('setGameInput', { playerID: data.playerID, buttonID: data.buttonID })
    }
  },
  commitInput({ state, commit }, data) {
    const currentRowIdx = state.players[data.playerID].turn
    // Use [...array] to clone array. Using equal sign only references the original
    const inputSubmission = [...state.players[data.playerID].game.input[currentRowIdx]].map(x => parseInt(x))
    
    // Calculate result
    const playerProblem = [...state.players[data.playerID].problem]
    let correct = 0
    let misplaced = 0

    for (let i=0; i<inputSubmission.length; i++) {
      if (inputSubmission[i] === playerProblem[i]) {
        correct += 1
        inputSubmission[i] = -1
        playerProblem[i] = -1
      }
    }

    for (let i=0; i<inputSubmission.length; i++) {
      if (inputSubmission[i] > -1) {
        for (let j=0; j<inputSubmission.length; j++) {
          if (i !== j && playerProblem[j] > -1 && inputSubmission[i] === playerProblem[j]) {
            misplaced += 1
            inputSubmission[i] = -1
            playerProblem[j] = -1
          }
        }
      }
    }

    commit('setGameTurnSubmission', { playerID: data.playerID, correct, misplaced })
  },
  cleanInput({ commit }, data) {
    commit('resetGameInput', { playerID: data.playerID })
  }
}

const mutations = {
  setPlayers: (state, players) => (state.players = players),
  setGameInput: (state, data) => {
    const currentRowIdx = state.players[data.playerID].turn

    state.players[data.playerID].game.input[currentRowIdx].push(data.buttonID)
  },
  setGameTurnSubmission: (state, data) => {
    const currentRowIdx = state.players[data.playerID].turn
    
    state.players[data.playerID].game.turns[currentRowIdx].correct = data.correct
    state.players[data.playerID].game.turns[currentRowIdx].misplaced = data.misplaced

    if (data.correct < state.game.combinationLib[state.players[data.playerID].stage]) {
      state.players[data.playerID].turn += 1
    } else {
      // Continue to next stage
      //    1. Reduce 1/3 of enemy's gauge
      const enemyID = data.playerID == 0 ? 1 : 0
      state.players[enemyID].gauge -= 25

      //    2. Reset player's game input and submission
      for (let i=currentRowIdx; i>=0; i--) {
        state.players[data.playerID].game.input[i].splice(0, 5)
        state.players[data.playerID].game.turns[i].correct = 0
        state.players[data.playerID].game.turns[i].misplaced = 0
      }

      state.players[data.playerID].turn = 0

      //    3. Increment player's difficulty, increment combinationMode
      state.players[data.playerID].stage += 1
      state.players[data.playerID].combination = state.game.combinationLib[state.players[data.playerID].stage]
      state.players[data.playerID].problem = state.functions.randomizeProblem(state.players[data.playerID].combination)
    }

    if (state.players[data.playerID].turn > 9) {
      state.players[data.playerID].gauge -= 25
      
      for (let i=currentRowIdx; i>=0; i--) {
        state.players[data.playerID].game.input[i].splice(0, 5)
        state.players[data.playerID].game.turns[i].correct = 0
        state.players[data.playerID].game.turns[i].misplaced = 0
      }
      
      state.players[data.playerID].turn = 0
      state.players[data.playerID].problem = state.functions.randomizeProblem(state.players[data.playerID].combination)
    }
  },
  resetGameInput: (state, data) => {
    const currentRowIdx = state.players[data.playerID].turn

    state.players[data.playerID].game.input[currentRowIdx].splice(0, 5)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}