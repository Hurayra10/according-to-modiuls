//৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 
const loadData =() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayUsrs(data))
}
// loadData()
const displayUsrs = data =>{
    console.log(data);
    const ul = document.getElementById('users');
   
     data.forEach(name  => {
        const li = document.createElement('li');
        li.innerText = `
            Name: ${name.name}
            Email: ${name.email}
            Id: ${name.id}        `
        ul.appendChild(li)
    })
 };  
        