// fetch

// async: bất đồng bộ hàm


// |

// const ten_ham = () => {  }


const fetchAPI = async () => {
    fetch('https://django-test-kilopdev.vercel.app/api/lesson/cpp/timeline')
        .then((res) => {
            console.log(res.json())
        })
}

fetchAPI()

// | : or , & : and, ^: xor




