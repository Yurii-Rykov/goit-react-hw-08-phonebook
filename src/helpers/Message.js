class Message {
    warning() {
        return alert('Something went wrong');
    }

    error() {
        return alert('Attention incorrect data');
    }
}

export default new Message();
