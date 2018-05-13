import { getChat, getChats, postChat } from '../util/chat_api_util';

export const RECEIVE_CHAT_ERRORS = "RECEIVE_CHAT_ERRORS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";
export const RECEIVE_CHATS = "RECEIVE_CHATS";

const receiveChat = (payload) => ({
  type: RECEIVE_CHAT,
  payload
});

const receiveChats = (payload) => ({
  type: RECEIVE_CHATS,
  payload
});

export const fetchChat = (id) => (dispatch) => (
  getChat(id).then(
    (payload) => dispatch(receiveChat(payload))
  )
);

export const fetchChats = () => (dispatch) => (
  getChats().then(
    (payload) => dispatch(receiveChats(payload))
  )
);

export const createChat = (ids) => (dispatch) => (
  postChat(ids).then(
    (payload) => dispatch(receiveChat(payload))
  )
);