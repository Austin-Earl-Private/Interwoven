const getData = async () => {
    const data = await apiFetch('http://localhost:7500/interwoven');
    displayAllData(data);
};

