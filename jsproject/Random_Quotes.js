console.log("Random Quotes")

let quotes = [
  'The Lord knows us for what we are, and eventually, everyone else does, too.',
  
  'You cannot do away with the competitive system so long as trademarks remain to distinguish one product from another. You cannot cut out large-scale manufacture so long as there are established brands which breed consumer confidence and thus make mass production not only possible and profitable, but also economical.',
  
  'Let not your mind run on what you lack as much as on what you have already. Of the things you have, select the best: and then reflect how eagerly they would have been sought if you did not have them.',
  
  'As tough as it sometimes looks on the front end, it\'s easier to do right than undo wrong.',
  
  'All sanity depends on this: that it should be a delight to feel heat strike the skin, a delight to stand upright, knowing the bones are moving easily under the flesh',
  
  'More men are killed by overwork than the importance of the world justifies.',
  
  'We have a call to do good, as the  often as we have the power and occasion.',
  
  'The task of thinking is based upon viji selection and weeding out; remembering everything is weirdly similar to forgetting everything. Most things that people do shouldn\'t be remembered. Maybe forgetting is good.',
  
  'There never were in the world two opinion ran s alike, no more than two hairs or two grains; the most universal quality is diversity.',
  
  'What is opportunity to the man who can\'t use it? An unfecundated egg, which the waves of time wash away into nonentity.',
  
  'The supreme reality of our time is ... the vulnerability of this planet.',
  
  'Contradictions do not exist. Whenever you think you are facing a contradiction, check your premises. You will find that one of them is wrong.'
]


function Quote_generator() {
  let random_quote = Math.floor(Math.random()*quotes.length)
  let Displayed_quote = document.getElementById('quote')
  console.log(Displayed_quote)
  Displayed_quote.innerHTML = `<h2 class="">${quotes[random_quote]}</h2>`
  console.log(Displayed_quote.innerHTML)
}