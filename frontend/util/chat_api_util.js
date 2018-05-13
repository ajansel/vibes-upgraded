export const getChat = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/chats/${id}`
  });
};

export const getChats = () => {
  return $.ajax({
    method: 'GET',
    url: `api/chats`
  });
};

export const postChat = (chatMemberIds) => {
  return $.ajax({
    method: 'POST',
    url: 'api/chats',
    data: { chat_member_ids: chatMemberIds }
  });
};
