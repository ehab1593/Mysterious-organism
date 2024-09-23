// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const randomString= mockUpStrand();


//Task3

const pAequorFactory = (number, dna) => {
  return {
    number: number,
    dna: dna,

// Task 4
  mutate(){
    let index = Math.floor(Math.random() * 15);

    let newBase = returnRandBase();

    while(this.dna[index] === newBase) {
      newBase = returnRandBase();
    }

    this.dna[index] = newBase;
    return this.dna;

},
    
//Task 5
compareDNA(anotherPAequor) {
  let commonCount = 0;

  for(i=0; i < this.dna.length; i++) {
    if(this.dna[i] === anotherPAequor.dna[i]){
      commonCount++;
    }
  }
    const percentage = ((commonCount /this.dna.length) * 100).toFixed(2);

    console.log(`specimen #${this.number} and specimen #${anotherPAequor.number} have ${percentage}% DNA in common.`);
  },

//Task 6
  willLikelySurvive() {
    let count= 0;

    for(i=0; i < this.dna.length; i++) {
      if(this.dna[i] === 'C' || this.dna[i] === 'G') {
        count++;
      }
    }

    const percentage = ((count / this.dna.length) * 100).toFixed(2);

    if(percentage >= 60) {
      return true;
    } else {
      return false;
    }
  }
};
};


const sample = pAequorFactory(0,randomString);
console.log(sample.mutate());

const pAequor1 = pAequorFactory(1, mockUpStrand());

const pAequor2 = pAequorFactory(3, mockUpStrand());

pAequor1.compareDNA(pAequor2);

const survivalChance = pAequor2.willLikelySurvive();

console.log(pAequor1.dna);
console.log(`Specimen #${pAequor1.number} will likely survive: ${survivalChance}`);

console.log(pAequor1.willLikelySurvive());


//Task 7 -  Making 30 instances of the object that will survive
const addpAequor = () => {
let survivingOrg = [];
let id =1;
  while(survivingOrg.length < 30) {
     const newPAequor = pAequorFactory(id, mockUpStrand());
  
  if(newPAequor.willLikelySurvive()) {
    survivingOrg.push(newPAequor); 
  }
   id++;
  }
  return survivingOrg;
}
  

console.log(addpAequor());

