const state = {
  game: {
    combinationMode: 5
  },
  players: []
}

const getters = {
  getPlayers: state => state.players,
  getGame: state => state.game
}

const actions = {
  initiateGame({ commit }) {
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

      players.push({
        id,
        gauge: 100,
        turn: 0,
        problem: [ 0, 2, 1, 1, 3 ],
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

    if (currentRow.length < state.game.combinationMode) {
      commit('setGameInput', { playerID: data.playerID, currentRowIdx, buttonID: data.buttonID })
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

    commit('setGameTurnSubmission', { playerID: data.playerID, currentRowIdx, correct, misplaced })
  },
  cleanInput({ state, commit }, data) {
    const currentRowIdx = state.players[data.playerID].turn

    commit('resetGameInput', { playerID: data.playerID, currentRowIdx })
  }
}

const mutations = {
  setPlayers: (state, players) => (state.players = players),
  setGameInput: (state, data) => (state.players[data.playerID].game.input[data.currentRowIdx].push(data.buttonID)),
  setGameTurnSubmission: (state, data) => {
    state.players[data.playerID].game.turns[data.currentRowIdx].correct = data.correct
    state.players[data.playerID].game.turns[data.currentRowIdx].misplaced = data.misplaced
    state.players[data.playerID].turn += 1
  },
  resetGameInput: (state, data) => {
    state.players[data.playerID].game.input[data.currentRowIdx].splice(0, 5)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}