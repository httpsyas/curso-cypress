/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    /* ——————————————————«•»——————————————————
      𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐧𝐝𝐨 𝐚𝐬𝐬𝐞𝐫𝐭 𝐩𝐚𝐫𝐚 𝐩𝐫𝐚𝐭𝐢𝐜𝐚 𝐦𝐚𝐢𝐬 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐚 ↴
            a.should('.to.be.equal', 1)
       ——————————————————«•»——————————————————
    */

    expect('a').not.to.be.equal('b')
})

    it('Truthy', () => {
        const a = true;
        const b = null;
        let c;

        expect(a).to.be.true;
        expect(true).to.be.true;
        expect(b).to.be.null;
        expect(a).to.be.not.null;
        expect(c).to.be.undefined;
    })

    it('Object Equality', () => {
        const obj = {
            a: 1,
            b: 2
        }

    // •────────────────────────────────────────────• 

        expect(obj).equal(obj)
        expect(obj).equal(obj)
        expect(obj).equals(obj)
        expect(obj).eq(obj)
        expect(obj).to.be.equal(obj)
        expect(obj).to.be.deep.equal({ a: 1, b: 2})
            // 𝐭𝐨𝐝𝐨𝐬 𝐯𝐚𝐨 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐚𝐫 
        expect(obj).eql({a: 1, b: 2})
        expect(obj).include({a:1})
        expect(obj).to.have.property('b')
        expect(obj).to.be.property('b',2)
        expect(obj).to.not.be.empty
        expect({}).to.be.empty

    // •────────────────────────────────────────────• 
    })

    it('Arrays', () => {
        const arr = [1, 2, 3]
        expect(arr).to.have.members([1, 2, 3])
        expect(arr).to.include.members([1, 3])
        expect(arr).to.not.be.empty
        expect({}).to.be.empty
    })

    it('Types', () => {
        const num = 1
        const str = 'String'

        expect(num).to.be.a('number')
        expect(str).to.be.a('string')
        expect({}).to.be.a('object')
        expect([]).to.be.a('array')
    })

    it('String', () => {
        const str = 'String de teste'

        expect(str).to.be.equal('String de teste')
        expect(str).to.have.length(15)
        expect(str).to.contains('de')
        expect(str).to.match(/de/)
        expect(str).to.match(/^String/) // para ver se a palavra está no começo
        expect(str).to.match(/teste$/) // para ver se a palavra está no final
        expect(str).to.match(/.{15}/) //.(ponto) aceita qualquer tipo de caractere 
        expect(str).to.match(/|W+/)  // só aceita letras
        expect(str).to.match(/|D+/) // verifica se não contém números
    })

    it('Numbers', () => {
        const number = 4
        const floatNumber = 5.2123

        expect(number).to.be.equal(4)
        expect(number).to.be.above(3) // verificar se o número é acima de 3
        expect(number).to.be.below(7) // verificar se o número está abaixo de 7
        expect(floatNumber).to.be.equal(5.2123)
        expect(floatNumber).to.be.closeTo(5.2, 0.1) // que o número seja perto de
        expect(floatNumber).to.be.above(5)
        
    })