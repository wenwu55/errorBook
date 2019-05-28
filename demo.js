
	
			var list = []
			var childList = []
			var nodeList = []
			var heightMark = 0
			var heightCount = 0
			var maxHeight = 200

			function handle(node) {

				let nodeHeight = node.offsetHeight

				let boolen = nodeHeight < maxHeight || node.children.length === 0 
				
				if(boolen) {
					list.push(node)
				}else {
					for(let i = 0; i < node.children.length; i++) {
						handle(node.children[i])
					}
				}
			}
			var btn = document.getElementById('btn')


			btn.addEventListener('click', () => {
				handle(document.body)
				handleList(list)
        console.log(list)
				console.log(nodeList)
			})

			function handleList(arr) {
				for(let i = 0;i < arr.length; i++) {
          var nodeMark = arr[i].offsetTop + arr[i].offsetHeight
					var nodeHeight = nodeMark - heightMark
					heightMark = nodeMark
					heightCount += nodeHeight
					if(heightCount > maxHeight) {
						nodeList.push(childList)
						childList = [arr[i]]
						heightCount = nodeHeight
					}else {
						childList.push(arr[i])
					}
					if(i === arr.length - 1) {
						if(childList) {
							nodeList.push(childList)
							childList = []
						}
					}
				}
      }
      