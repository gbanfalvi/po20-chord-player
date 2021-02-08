
export class ElemFactory {
    
    /**
     * Convenience function to create an element.
     * 
     * @param {string} tag - Element's tag
     * @param {string | null} id - Element's ID
     * @param {string[] | null} classes - Element's classes
     * 
     * @returns {HTMLElement} 
     */
    static create(tag, id, classes) {
        let elem = document.createElement(tag)

        if (id != null) {
            elem.id = id
        }

        if (classes != null) {
            elem.classList.add(...classes)
        }

        return elem
    }
}