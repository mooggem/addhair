        function submit() {
            let length = document.querySelector("input[name='length']:checked").value;
            let amount = document.querySelector("input[name='amount']:checked").value;
            let curl = document.querySelector("input[name='curly']:checked").value;

            let curl1, curl2;
            if (curl==0){
                curl1 = 0;
                curl2 = 1;
            }
            else{
                curl1 = 1;
                curl2 = 2;
            }

            let result1 = ((-0.516) * length + (0.407) * amount + 2.754 + curl1).toFixed(1)
            let result2 = ((-0.516) * length + (0.407) * amount + 2.754 + curl2).toFixed(1)

            document.getElementById("result_1").value = result1;
            document.getElementById("result_2").value = result2;
        }