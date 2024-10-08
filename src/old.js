   const [sum, setSum] = useState(x+y);
      const [min, setMin] = useState(x-y);
      const [minu, setMinu] = useState(y-x);


      
        // Обновляем сумму при изменении x или y
      useEffect(() => {
          setSum(x + y);
      }, [x, y]);

      useEffect(() => {
        setMin(x - y);
    }, [x, y]);

    useEffect(() => {
      setMinu(y -x);
  }, [x, y]);


   {/* <h1>x+y: {sum}</h1>
      <h1>x-y: {min}</h1>
      <h1>y-x: {minu}</h1> */}