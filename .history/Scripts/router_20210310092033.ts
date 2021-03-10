

namespace core {
    
    class Router {

        //instance variables
        private m_activeLink:string;
        m_routingTable: string[];

        // constructors
        constructor() 
        {
            this.ActiveLink = "";
        }

        // Public Properties (getters and setters)
        get ActiveLink():string 
        {
            return this.m_activeLink;
        }

        set ActiveLink(link:string) 
        {
            this.m_activeLink = link;
        }

        // Public methods

        /**
         * Adds a new route to the Routing Table
         *
         * @param {string} route
         * @returns {void}
         */
       public Add(route:string):void
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current Routing Table with a new one
         * Routes should begin with / character
         *
         * @param {string} routingTable
         * @returns {void}
         */
      public AddTable(routingTable:string[]):void 
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the routing table
         * otherwise it returns -1 if the route is not found
         *
         * @param {string} route
         * @returns {number}
         */
        public Find(route:string) :number
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * This method removes a route from the Routing Table
         * It returns true if the route was successfully removed,
         * otherwise it returns false
         * 
         * @param {string} route
         * @returns {boolean}
         */
       public Remove(route:string) :boolean
        {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        /**
         * This method returns the routing table as a comma-separated string 
         *
         * @returns {string}
         */
        public ToString() :string
        {
            return this.m_routingTable.toString();
        }
    }
   
}

let router = new core.Router();
router.AddTable(["/", 
                 "/home", 
                 "/about", 
                 "/services", 
                 "/contact", 
                 "/contact-list", 
                 "/projects", 
                 "/register", 
                 "/login", 
                 "/edit"]);
                
let route = location.pathname; // alias for location.pathname

if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1)
}
else
{
    router.ActiveLink = "404";
}


