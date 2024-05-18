const truncateText = (text, wordCount) => {
    const words = text.split(' ');
    return words.length > wordCount ? words.slice(0, wordCount).join(' ') + '...' : text;
};

export default truncateText;