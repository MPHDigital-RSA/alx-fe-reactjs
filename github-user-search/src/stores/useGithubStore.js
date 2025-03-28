import { create } from 'zustand'

const useGithubStore = create((set) => ({
  userData: {
    test: 1234,
  },
}))

export default useGithubStore