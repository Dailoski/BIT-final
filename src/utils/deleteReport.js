const deleteReport = (id) => {
    const token = sessionStorage.getItem('accessToken')

    fetch(`http://localhost:3333/api/reports/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
// deleteReport bi trebala da vraca promis kako bi se odradila neka akcija ka odgovor servera
export default deleteReport