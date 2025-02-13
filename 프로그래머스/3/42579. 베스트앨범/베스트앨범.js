function solution(genres, plays) {
    // 장르별 총 재생 횟수를 계산
    const genreTotal = {};
    genres.forEach((genre, i) => {
        genreTotal[genre] = (genreTotal[genre] || 0) + plays[i];
    });
    
    // 곡 정보를 객체 배열로 만들기
    const songs = genres.map((genre, i) => ({
        id: i,
        genre: genre,
        play: plays[i]
    }));
    
    // 장르별로 곡들을 그룹화
    const groupedByGenre = {};
    songs.forEach(song => {
        if (!groupedByGenre[song.genre]) {
            groupedByGenre[song.genre] = [];
        }
        groupedByGenre[song.genre].push(song);
    });
    
    // 결과 배열 생성
    const result = [];
    
    // 장르를 총 재생 횟수로 정렬
    Object.entries(genreTotal)
        .sort((a, b) => b[1] - a[1])
        .forEach(([genre]) => {
            // 각 장르 내에서 곡들을 정렬
            groupedByGenre[genre]
                .sort((a, b) => b.play - a.play || a.id - b.id)
                .slice(0, 2)
                .forEach(song => result.push(song.id));
        });
    
    return result;
}