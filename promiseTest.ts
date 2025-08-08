new Promise((resolve, reject) => {
  throw new Error("error test");
})
  .then(
    () => {
      console.log("111");
    // }
    },
    () => {
      throw new Error("error test reject");
    }
  )
  .catch((error) => {
    console.error("error", error);
  });
