import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.mock('http://localhost:3000/api/getUserInfo', getUserInfo)

export default Mock
