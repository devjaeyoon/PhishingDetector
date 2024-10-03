chrome.webNavigation.onCompleted.addListener((details) => {
  const { url } = details;

  // 서버에 URL 전송 예시
  //   fetch('https://your-detection-server.com/api/check', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ url: url }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const phishingProbability = data.probability;
  //       notifyUser(phishingProbability);
  //     })
  //     .catch((error) => console.error('Error:', error));
  // },
  // { url: [{ urlMatches: 'https?://.*' }]
});
