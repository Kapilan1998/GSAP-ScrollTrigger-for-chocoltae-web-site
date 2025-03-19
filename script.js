let t1 = gsap.timeline({scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
}})
t1.to("#can",{
    top:"98%",
    left:"12%",
    rotate:"30deg"
},"chocolate")

t1.to("#chocolate",{
    top:"150%",
    left:"25%",
},"chocolate")

t1.to("#chocolate2",{
    top:"150%",
    right:"5%",
    width:"20%",
    rotate:"-30deg"
},"chocolate")

t1.to("#almod",{
    top:"110%",
    left:"5%",
    width:"15%",
    rotate:"120deg"
},"chocolate")

t1.to("#almod2",{
    top:"130%",
    left:"0%",
    rotate:"180deg"
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
    left: "35%",
    top: "270%"
}, 'can')
t2.to("#can",{
    width:"30%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'can')

