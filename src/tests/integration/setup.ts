import { beforeAll, afterEach, afterAll } from 'vitest'
import { worker } from '../../mocks/browser'

beforeAll(() => worker.start())
afterEach(() => worker.resetHandlers())
afterAll(() => worker.stop())
