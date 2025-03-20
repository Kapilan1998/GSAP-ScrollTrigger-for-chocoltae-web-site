let t1 = gsap.timeline({scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})
t1.to("#can",{
    top:"95%",
    left:"12%",
    rotate:"30deg"
},"chocolate")

t1.to("#chocolate",{
    top:"160%",
    left:"23%",
},"chocolate")

t1.to("#chocolate2",{
    top:"160%",
    right:"10%",
    width:"25%",
    rotate:"-15deg"
},"chocolate")

t1.to("#almod",{
    top:"110%",
    left:"70%",
    rotate:"130deg"
},"chocolate")

t1.to("#almod2",{
    top:"110%",
    left:"5%",
    rotate:"140deg"
},"chocolate")


let t2 = gsap.timeline({scrollTrigger: {
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
}})
t2.to("#chocolate",{
    width:"28%",
    left: "42%",
    top: "214%"
}, 'can')
t2.to("#chocolate2",{
    width:"15%",
    left: "25%",
    top: "270%"
}, 'can')
t2.to("#can",{
    width:"30%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'can')

