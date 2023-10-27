//required to connect ot Oracle Data Base
const oDB = require('oracledb');
/*required to commit changes when adding, deleting and updating
without autoCommit the database will not execute the changes*/
oDB.autoCommit = true;
//My credentials to connect to the data base//
//GABRIELA ALDRETE 
const dbConfig = {
    user: "gxa2206",
    password: "Cse5330sec004",
    connectString: "acaddbprod.uta.edu:1523/pcse1p.data.uta.edu"
}
//to read information from user
const readline = require("readline")
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
const prompt = require("prompt-sync")();

//Necesary drivers
oDB.initOracleClient({libDir: "../../../../Downloads/instantclient_19_8/"});
oDB.outFormat = oDB.OUT_FORMAT_OBJECT;

/* Function gives the list of all attributes of any table 
user has to enter the name of the table. */
async function tables_(ans0) {
    let connection;
    let name_table = ans0
    let sql = `select * from `
    query = sql + name_table
    
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query);

        switch (name_table) {
            case "FALL22_004_6_TABLES":
                console.log("\nTABLE_ID\tSTYLE\t\tSITTING\tAMOUNT IN STOCK") 
                console.log('================================================')
                for(var x in data.rows)
                {   
                console.log(data.rows[x].TAB_ID + "\t" + data.rows[x].T_TYPE + "\t" + data.rows[x].SITTING_AMOUNT + "\t" + data.rows[x].AMOUNT_IN_STOCK+"\n")
                } ;
              break;
            case "FALL22_004_6_EVENT":
                console.log("\nEVENT_ID\tEvent Name\t\tEvent Date\t\tAttendees\tSTAFF IF\tStaff_Hrs\tClientID")
                for(var x in data.rows)
                {
                console.log(data.rows[x].EVENT_ID + " " + data.rows[x].E_NAME + "  " + data.rows[x].E_DATE + "  " + data.rows[x].AMOUNT_OF_PARTICIPANTS+"  " + data.rows[x].STAFF_ID + data.rows[x].STAFF_HRS_WORKED + "  " + data.rows[x].CLIENT_ID + "\n")
                } ;
              break;
              case "FALL22_004_6_EMPLOYEE":
                  console.log("\nEmployee_ID\tEmployee First\t\tEmployee Middle\tEmployee Last\tBirth Date\tGender\tClient ID\tEmployee Address\tEmployee Email\tCellphone")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].EMP_ID + "\t" + data.rows[x].E_FIRST + "\t" + data.rows[x].E_MIDDLE + "\t" + data.rows[x].E_LAST + data.rows[x].B_DATE + data.rows[x].GENDER + data.rows[x].E_ADDRESS + data.rows[x].E_EMAIL + data.rows[x].CELL_PHONE +  "\n")
                  } ;
                break;
              case "FALL22_004_6_CLIENT":
                  console.log("\nCLIENT_ID\tClient Type\t\tClient Address\tClient Email\tWay We Met Center\tWay of contact")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CLIENT_ID + "\t" + data.rows[x].C_TYPE + "\t" + data.rows[x].C_ADDRESS + "\t" + data.rows[x].C_EMAIL + data.rows[x].WAY_MET_CENTER + data.rows[x].WAY_OF_CONTACT +  "\n")
                  } ;
                break;
              case "FALL22_004_6_FOODS":
                  console.log("\nFood Num\tSales_$\tPurchase_$")
                  console.log('==================================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].F_NUM + "\t" + data.rows[x].SALES_PRICE + "\t" + data.rows[x].PURCHASE_PRICE + "\n")
                  } ;
                break;
              case "FALL22_004_6_UTILITIES":
                  console.log("\nUtil_Num\tBill_Ending_Period\t\t\t\t\t\tCost")
                  console.log('======================================================================================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].U_CODE + "\t" + data.rows[x].U_DATE+ "\t" + data.rows[x].COST_PER_MONTH + "\n")
                  } ;
                break;
              case "FALL22_004_6_SALARY":
                  console.log("\nSalary ID\tAnnual Salary")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].SAL_ID + "\t" + data.rows[x].ANNUAL_SALARY + "\n")
                  } ;
                break;
              case "FALL22_004_6_HOURLY": 
                  console.log("\nHOURLY_ID\tRate_$\tWork_Type")
                  console.log('======================================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].HOURLY_ID + "\t" + data.rows[x].HOURLY_RATE + "\t" + data.rows[x].WORK_TYPE + "\n")
                  } ;
                break; 
              case "FALL22_004_6_EVENT_STAFF":
                  console.log("\nEVENT Staff ID")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].ESTAFF_ID + "\n")
                  } ;
                break;
              case "FALL22_004_6_PLANNER":
                  console.log("\nCLIENT ID\tPlanner ID\t\tFirst Name\tMiddle Name\tLast Name\tEmail\tLast Name")
                  console.log('===============================================================================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CLIENT_ID + "\t" + data.rows[x].PLANNER_ID + "\t" + data.rows[x].P_FIRSTNAME + "\t" + data.rows[x].P_MIDDLE + data.rows[x].P_LASTNAME + data.rows[x].P_EMAIL + data.rows[x].P_RATING +  "\n")
                  } ;
                break;
              case "FALL22_004_6_PUBLIC":
                  console.log("\nPublic Id\tDuration")
                  console.log('========================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].PUBLIC_ID + "\t" + data.rows[x].DURATION + "\n")
                  } ;
                break;         
              case "FALL22_004_6_ELECTRICITY":
                  console.log("\nEle_Code     KWH/Month")
                  console.log('========================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].EU_CODE + "\t" + data.rows[x].KWH_PER_MONTH + "\n")
                  } ;
                break;         
              case "FALL22_004_6_ADMIN_STAFF":
                  console.log("\nADMIN ID\tJob Position")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].ADMIN_ID + "\t" + data.rows[x].JOB_POSITION + "\n")
                  } ;
                break;         
              case "FALL22_004_6_WORKS_ON":
                  console.log("\nHOURLY ID\tEvent ID\t\tHOURS Worked")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].HOURLY_ID + "\t" + data.rows[x].EVENT_ID + "\t" + data.rows[x].HRS_WORKED + "\n")
                  } ;
                break;                      
              case "FALL22_004_6_CLIENT_PHONE":
                  console.log("\nCLIENT ID\tCLIENT Phone")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CLIENT_ID + "\t" + data.rows[x].C_PHONE + "\n")
                  } ;
                break;                
              case "FALL22_004_6_CORPORATION":
                  console.log("\nCORPORATION ID\tClient Name")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CORP_ID + "\t" + data.rows[x].C_NAME + "\n")
                  } ;
                break;  
              case "FALL22_004_6_PLANNER_PHONE":
                  console.log("\nCLIENT ID\tPlanner ID\t\tPlanner Phone")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CLIENT_ID + "\t" + data.rows[x].PLANNER_ID + "\t" + data.rows[x].P_PHONE + "\n")
                  } ;
                break;      
              case "FALL22_004_6_INDIVIDUAL":
                  console.log("\nIND ID\tFirst Name\t\tFirst Name\tMiddle Name\tLast Name")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].IND_ID + "\t" + data.rows[x].I_FIRSTNAME + "\t" + data.rows[x].I_MIDDLE + "\t" +  data.rows[x].I_LASTNAME + "\n")
                  } ;
                break;
              case "FALL22_004_6_SOCIAL":
                  console.log("\nSOCIAL ID\tS Time")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].SOCIAL_ID + "\t" + data.rows[x].S_TIME + "\n")
                  } ;
                break;       
              case "FALL22_004_6_HALL":
                  console.log("\nHallID\t\tHall_Name\tSqft  Capacity  Min_Cost Max_Cost")
                  console.log('====================================================================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].HALL_ID + "\t" + data.rows[x].HALL_NAME + "\t" + data.rows[x].SIZE_SQFT + "\t" + data.rows[x].CAPACITY +"\t" + data.rows[x].MIN_COST + "\t" + data.rows[x].MAX_COST + "\n")
                  } ;
                break;  
  
              case "FALL22_004_6_EXHIBIT":
                  console.log("\nEXIB ID\tNum Sqft")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].EXIB_ID + "\t" + data.rows[x].NUM_SQFT + "\n")
                  } ;
                break;     
              case "FALL22_004_6_CONVENTION":
                  console.log("\nConven_ID\tSetting_Type")
                  console.log('=========================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CONV_ID + "\t" + data.rows[x].SETTING_TYPE + "\n")
                  } ;
                break;                
              case "FALL22_004_6_CONCERT":   
              console.log("\nConcert_ID\tArtist")
              console.log('===========================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].CONC_ID + "\t" + data.rows[x].ARTIST + "\n")
                  } ;
                break;               
              case "FALL22_004_6_SERVES":
                  console.log("\nF NUM\tEvent ID\t\tAmount Drinks\tAmount Meals")
                  for(var x in data.rows)
                  {
      
                  console.log(data.rows[x].F_NUM + "\t" + data.rows[x].EVENT_ID + "\t" + data.rows[x].AMOUNT_DRINKS + "\t" +  data.rows[x].AMOUNT_MEALS + "\n")
                  } ;
                break;                 
              case "FALL22_004_6_WATER":
                  console.log("\nWU Code\tGallons Per Month")
                  
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].WU_CODE + "\t" + data.rows[x].GAL_PER_MONTH + "\n")
                  } ;
                break;   
  
              case "FALL22_004_6_TABLE_CLOTHES":
                  console.log("\nTable_ID\tTableC_ID\tType\t\tColor\tCleaning_$")
                  console.log('==================================================================')
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].TAB_ID + "\t" + data.rows[x].TC_ID + "\t" + data.rows[x].TC_TYPE + "\t" + data.rows[x].COLOR +"\t" + data.rows[x].CLEANING_COST + data.rows[x].AMOUNT_IN_STOCK + "\n")
                  } ;
                break; 
              case "FALL22_004_6_MEAL_CHOICE":
                  console.log("\nFM Num\tMeal Name\t\tMeal type")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].FM_NUM + "\t" + data.rows[x].MEAL_NAME + "\t" + data.rows[x].MEAL_TYPE + "\n")
                  } ;
                break;  
              case "FALL22_004_6_DRINK_TYPE":
                  console.log("\nDM Num\tDrink Name\t\tDrink type")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].DM_NUM + "\t" + data.rows[x].D_NAME + "\t" + data.rows[x].D_TYPE + "\n")
                  } ;
                break;   
              case "FALL22_004_6_HALL_RENTS":
                  console.log("\nHall ID\tEvent ID\t\tCost Per Event")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].HALL_ID + "\t" + data.rows[x].EVENT_ID + "\t" + data.rows[x].COST_PER_EVENT + "\n")
                  } ;
                break;    
              case "FALL22_004_6_TABLES_REQUIRED":
                  console.log("\nEVENT ID\tTable Id\t\tNumber of Tables Required")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].EVENT_ID + "\t" + data.rows[x].TAB_ID + "\t" + data.rows[x].NUM_TABLES_REQUIRED + "\n")
                  } ;
                break;   
              case "FALL22_004_6_ELEC_USAGE":
                  console.log("\nHall Id\tElectricity Code")
                  for(var x in data.rows)
                  {
                  console.log(data.rows[x].HALL_ID + "\t" + data.rows[x].E_CODE + "\n")
                  } ;
                break;  
              default:
                console.log("This table does not exit");
                break;
            }
            
        //console.log(data.rows);
    }
    catch(err) {
        console.log(err);
    }
}
//Function is to update values entered by user
async function updates(ans0,ans1,ans2) {
    let connection
    
    let name_table = ans0
    let newval = ans1
    let oldval = ans2

    let query = `UPDATE ` + name_table + ` SET ` + newval + ` WHERE `+ oldval
    //console.log(query)

    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        console.log(data)
        console.log('update successful -- chece table for correctness')
    }
    catch(err) {
        console.log(err);
    }
}
//Function is to delete rows from tables
async function deletes(ans0,ans1) {
    let connection;
    
    let name_table = ans0
    let condition = ans1

    let query = `DELETE FROM ` + name_table + ` WHERE `+ condition

    console.log(query)

    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        //console.log(data)
        console.log('\nDeletion complete  --check table for correctness\n');
    }
    catch(err) {
        console.log(err);
    }
}
//Function is to delete rows from tables 
async function inserts(ans0,ans1,ans2) {
    let connection

    let name_table = ans0
    let attributes = ans1
    let values = ans2
    
    query = 'INSERT INTO '+ name_table + '('+ attributes +')' + 'VALUES' +'(' + values + ')'

    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        console.log(data)
        console.log("\nInsert completed --check table for correctness\n")
    }
    catch(err) {
        console.log(err);
    }
}
//Looking at revenue  
async function revenue_perYr(ans) {
    let connection;
    let year = ans
    
    sql = `SELECT SUM(COST_PER_EVENT/20) AS TOTAL_REVENUE
    FROM FALL22_004_6_EVENT E, FALL22_004_6_HALL_RENTS HR
    WHERE  E.EVENT_ID=HR.EVENT_ID AND EXTRACT(YEAR FROM E_DATE) = '`
    
    query = sql + year + "'"
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        console.log(data.rows)
        return data 
    }
    catch(err) {
        console.log(err)
    }
}
//Function to calculate Ytd financial -- Ut8ilizes ORDER BY, CUBE and ROLL UP
async function ytd_financial(ans) {
    let connection;
    let type = ans
    if ((type == 'EVENT') || (type == 'event')){
        query = `SELECT EVENT_ID, HALL_ID, SUM(COST_PER_EVENT) AS REVENUE
                FROM FALL22_004_6_HALL_RENTS
                WHERE HALL_ID NOT IN ('INMIC01A','OUT0001A','ALLPB001A','ALLPA001A','ALLMI001A','ALLMIC01A')
                GROUP BY ROLLUP (EVENT_ID, HALL_ID)
                ORDER BY REVENUE DESC`
    }
    else{
        query = `SELECT EVENT_ID, HALL_ID, SUM(COST_PER_EVENT) AS REVENUE
                FROM FALL22_004_6_HALL_RENTS
                WHERE HALL_ID NOT IN ('INMIC01A','OUT0001A','ALLPB001A','ALLPA001A','ALLMI001A','ALLMIC01A')
                GROUP BY CUBE (EVENT_ID, HALL_ID)
                ORDER BY REVENUE DESC` 
    }     
            
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        console.log(data.rows)
        
        /*console.log("\nEVENT_ID\tHALL_ID\tREVENUE_YTD")
        console.log('================================')
    
            for(var x in data.rows)
            {
            console.log(data.rows[x].EVENT_ID + '\t' + data.rows[x].HALL_ID + '\t' + data.rows[x].REVENUE + '\n')
            } 
        */
    }
    catch(err) {
        console.log(err);
    }
}
//Funciton produces the financials of the HALLs only  -- Utilizes GROUP BY and HAVING
async function halls_revenue() {
    let connection;

    query = `SELECT HR1.HALL_ID HI, H.HALL_NAME HN, SUM(COST_PER_EVENT) TOTAL_REV
    FROM FALL22_004_6_HALL_RENTS HR1, FALL22_004_6_HALL H
    WHERE HR1.HALL_ID NOT IN (SELECT HR2.HALL_ID FROM FALL22_004_6_HALL_RENTS HR2
                              WHERE HR2.HALL_ID IN ('INMIC01A','OUT0001A','ALLPB001A','ALLPA001A','ALLMI001A','ALLMIC01A'))
          AND HR1.HALL_ID = H.HALL_ID                              
    GROUP BY H.HALL_NAME, HR1.HALL_ID
    ORDER BY TOTAL_REV DESC
            `
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
          
        //console.log(data.rows)
        console.log("\nHALL_ID          HALL_NAME            REVENUE")
        console.log('===============================================')
    
            for(var x in data.rows)
            {
            console.log(data.rows[x].HI + '\t' + data.rows[x].HN+ '        ' + data.rows[x].TOTAL_REV + '\n')
            } 
      
    }
    catch(err) {
        console.log(err);
    }
}
//Function gives top 10 drinks the Centers offers -- Utilizes ORDER BY AND FETCH
async function drinks(ans) {
    let connection;
    let type = ans
    if (type == 'alcoholic'){
        query = `SELECT D_NAME
                FROM FALL22_004_6_DRINK_TYPE
                WHERE D_TYPE = 'alcoholic'
                ORDER BY D_NAME ASC
                FETCH FIRST 10 ROWS ONLY`
    }
    else{
        query = `SELECT D_NAME 
                FROM FALL22_004_6_DRINK_TYPE
                WHERE D_TYPE = 'non_alcoholic'
                ORDER BY D_NAME ASC
                FETCH FIRST 10 ROWS ONLY` 
    }            
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        
        console.log("\nDRINK_ NAME")
        console.log('=================')
    
            for(var x in data.rows)
            {
            console.log(data.rows[x].D_NAME + "\n")
            } 
    }
    catch(err) {
        console.log(err);
    }
}
//Top meals sell by the Center 
async function meals() {
    let connection;

    query = `SELECT MC.MEAL_NAME, MC.MEAL_TYPE
            FROM FALL22_004_6_SERVES S, FALL22_004_6_MEAL_CHOICE MC, FALL22_004_6_FOODS F
            WHERE MC.FM_NUM = F.F_NUM AND F.F_NUM = S.F_NUM
            GROUP BY MC.MEAL_TYPE, MC.MEAL_NAME
            ORDER BY COUNT(S.F_NUM) DESC
            FETCH FIRST 10 ROWS ONLY
            `
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        
        console.log("\n TOP  10 MEALS SERVED AND TYPE")
        console.log('==================================')
    
            for(var x in data.rows)
            {
            console.log(data.rows[x].MEAL_NAME +" ----> " + data.rows[x].MEAL_TYPE +"\n")
            }   
        //console.log(data.rows)
    }
    catch(err) {
        console.log(err);
    }
}
//Tables required per Event 
async function tables_req() {
    let connection;

    query = `SELECT E_name EVENT, E_date Date_of_Event, NUM_TABLES_REQUIRED Tables_Required
            FROM FALL22_004_6_TABLES_REQUIRED, FALL22_004_6_EVENT 
            WHERE FALL22_004_6_TABLES_REQUIRED.EVENT_ID = FALL22_004_6_EVENT.EVENT_ID
            `
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
          
        console.log(data.rows)
    }
    catch(err) {
        console.log(err);
    }
}
//Function gives Utility cost for Water or Electric
async function utilities(ans1, ans2) {
    let connection;
    let type = ans1
    if (type == 'w' || type == 'W'){
        sql = `SELECT U_CODE, U_DATE, SUM(COST_PER_MONTH) AS MONTHLY_COST
                FROM FALL22_004_6_UTILITIES
                WHERE U_CODE LIKE 'W%' AND EXTRACT (YEAR FROM U_DATE) = '`
                
        query =  sql + ans2 + `' ` + `GROUP BY U_CODE, U_DATE`
    }
    else if (type == 'e' || type == 'E'){
        sql = `SELECT U_CODE, U_DATE, SUM(COST_PER_MONTH) AS MONTHLY_COST
                FROM FALL22_004_6_UTILITIES
                WHERE U_CODE LIKE 'E%' AND EXTRACT (YEAR FROM U_DATE) = '`
                
        query =  sql + ans2 + `' ` + `GROUP BY U_CODE, U_DATE`  
    }  
    else 
        console.log("wrong entry")          
    
        try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
    
        console.log("\nUTILITIES PER YEAR -- Bill_ID starts with W for Water or with E for Electricity")
        console.log("BILL_ID\t\t\t\tBILLDATE\t\t\t\t   MONTHLY_COST")
        console.log('======================================================================================')
    
            for(var x in data.rows)
            {
            console.log(data.rows[x].U_CODE + '\t' +  data.rows[x].U_DATE + '\t' + data.rows[x].MONTHLY_COST + "\n")
            } 
    }
    catch(err) {
        console.log(err);
    }
}
//Detailed Information per EVENT
async function social_events(ans) {
    let connection;
    
    Id_num = ans
    sql = `select E_name EVENT, E_date Date_of_Event, amount_of_participants ATTENDEES, NUM_TABLES_REQUIRED Tables_Required, AMOUNT_MEALS Meals_Required, MEAL_NAME Meal_Choice  
          from FALL22_004_6_TABLES_REQUIRED TR, FALL22_004_6_EVENT E, FALL22_004_6_SERVES S, FALL22_004_6_MEAL_CHOICE MC, FALL22_004_6_FOODS F 
          where TR.EVENT_ID = E.EVENT_ID AND E.EVENT_ID = S.EVENT_ID AND S.F_NUM = F.F_NUM AND F.F_NUM = MC.FM_NUM AND E.EVENT_ID ='`
            
    query = sql + Id_num +"'" 
    //console.log(query)

    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
         
        if (data.rows[0]== null){
            console.log("\nNo info available for such EVENT\n")
        }
        else{
            //console.log(data.rows);
            console.log("\nEVENT\t\t\tATTENDEES\t#ofTABLES\t#ofMEALS")
            for(var x in data.rows)
            {
            console.log(data.rows[x].EVENT + "\t " + data.rows[x].ATTENDEES + "\t\t" + data.rows[x].TABLES_REQUIRED + "\t\t" + data.rows[x].MEALS_REQUIRED+"\n")
            } 
        }    
    }
    catch(err) {
        console.log(err);
    }
}
async function  employee_job(ans) {
    let connection;
    let type = ans
    
    switch (type) {
        case '1':     
            query = `SELECT count(HOURLY_ID) as Available#, work_type
                FROM FALL22_004_6_HOURLY
                GROUP BY work_type
                HAVING work_type='Waiter'`  
          break;
        case '2':
            query = `SELECT count(HOURLY_ID) as Available#, work_type
                FROM FALL22_004_6_HOURLY
                GROUP BY work_type
                HAVING work_type='Technical Help'`  
          break;
        case '3':
            query = `SELECT count(HOURLY_ID) as Available#, work_type
                FROM FALL22_004_6_HOURLY
                GROUP BY work_type
                HAVING work_type='Cleaner'`  
          break;
        case '4':
            query = `SELECT count(HOURLY_ID) as Available#, work_type
                FROM FALL22_004_6_HOURLY
                GROUP BY work_type
                HAVING work_type='Cashier'`  
          break;
        case '5':
            query = `SELECT count(HOURLY_ID) as Available#, work_type
                FROM FALL22_004_6_HOURLY
                GROUP BY work_type`  
          break;
        default:
          console.log("Selection Invalid");
          break;
      }
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        
        console.log(data.rows)
        console.log('\n')  
    }
    catch(err) {
        console.log(err);
    }
}
//Tables required per Event 
async function wayContact() {
    let connection;

    query = `SELECT WAY_MET_CENTER, COUNT(WAY_MET_CENTER) AMNT
            FROM FALL22_004_6_CLIENT
            GROUP BY WAY_MET_CENTER 
            ORDER BY COUNT(WAY_MET_CENTER) DESC
            FETCH FIRST 3 ROWS ONLY`
    try {
        connection = await oDB.getConnection(dbConfig)

        const data = await connection.execute(query)
        
        console.log("\n TOP 3 WAYS CLIENTS CONTACT THE CENTER AND AMOUNT")
        console.log('====================================================')
    
            for(var x in data.rows)
            {
            console.log(data.rows[x].WAY_MET_CENTER +" ----> " + data.rows[x].AMNT +"\n")
            }   
        //console.log(data.rows)
    }
    catch(err) {
        console.log(err);
    }
}
// Menu to select the queries avilable for user
function the_menu() {
    console.log("\n\nWelcome to the CONVENTION CENTER DATABASE")
    console.log("============================================")
    console.log("\n1: Select all info from a particular table")
    console.log("\n2: Update value on a table")
    console.log("\n3: Delete a row from a table")
    console.log("\n4: Insert new info for a table")
    console.log("\n5: Select Top drinks Centers Sells")
    console.log("\n6: Select Top Meals Center Sells")
    console.log("\n7: Information about a particular Event")
    console.log("\n8: Select Tables_Required per Social Event in 2022 so far ")
    console.log("\n9: Revenue for a particular year")
    console.log("\n10: YTD finances per HALL/event or per EVENT/hall")
    console.log("\n11: Summary of Financials for HALLS only")
    console.log("\n12: Available Hr_Employees per type of job")
    console.log("\n13: Ways Clients Learn about the Convention Center")
    console.log("\n14: Cost of Utilities")
    console.log("\n15: Exit Data Base")
}

//START MENU
the_menu()
    rl.question("\nSelect Menu Item...: ", (string) => {

    if(string == 1)  //ask info for relation to be displayed
    {
        rl.question("Enter the table name. Ex. FALL22_004_6..:", (answer2) => {
            console.log("\nTABLE SELECTED: ", answer2);
            tables_(answer2)
            rl.close();
        })
    }
    if(string == 2) //Ask info for updates
    {
        rl.question("Enter UPDATE INFO: Ex. FALL22_004_6.., T_TYPE='new', Condition ='old or ID': ", (ans_string) => {
            answer = ans_string.split(', ') 
            console.log('From Table:', answer[0], ' New_value: ', answer[1], ' Condition: ', answer[2], '\n');
            updates(answer[0], answer[1], answer[2])
            rl.close();
        }) 
    }
    if(string == 3)
    {
        rl.question("Enter DELETE INFO: Ex. FALL22_004_6.., Condition ='rowID': ", (ans_string) => {
            answer = ans_string.split(', ') 
            console.log('From Table:', answer[0], 'ID: ', answer[1], '\n');
            deletes(answer[0], answer[1])
            rl.close();
        }) 
    }
    if(string == 4)
    {
        rl.question("Enter INSERT INFO: Ex. FALL22_004_6_..: Attributes: Values (all separated by ,): ", (ans_string) => {
            answer = ans_string.split(': ') 
            console.log('From Table:', answer[0], ' Attributes: ', answer[1], ' Values: ', answer[2], '\n');
            inserts(answer[0], answer[1], answer[2])
            rl.close();
        }) 
    }
    if(string == 5)
    {
        rl.question("Select type alcoholic or nonalcoholic: ", (answer2) => {
            console.log('Type: ', answer2);
            drinks(answer2)
            rl.close();
        })
    }
    if(string == 6)
    {
        meals()
        rl.close();
    }
    if(string == 7)
    {
        rl.question("Enter the Event ID: ", (answer2) => {
            console.log('The Id_num: ', answer2);
            social_events(answer2)
            rl.close();
        })   
    }
    if(string == 8)
    {
        tables_req()
        rl.close();
    }
    if(string == 9)
    {
        rl.question("Enter year-- Ex 2022: ", (answer2) => {
            console.log('Year: ', answer2);
            revenue_perYr(answer2)
            rl.close()
        })
    }
    if(string == 10)
    {
        rl.question("Per HALL as primary focus or EVENT: ", (answer2) => {
            console.log('Finances per: ', answer2);
            ytd_financial(answer2)
            rl.close()
        })
    }
    if(string == 11)
    {
        halls_revenue()
        rl.close();
    }
    if (string == 12)
    {
        rl.question("Enter Type of job -- Waiter (1), Technician (2), Cleaner(3), Cashier(4) or All(5): ", (answer2) => {
            console.log('Type: ', answer2)
            employee_job(answer2)
            rl.close()
        })
    }
    if(string == 13)
    {
        wayContact()
        rl.close()
    }
    if(string == 14)
    {
        rl.question("Select utilities: Water(w) or electric(e), followed by year Ex.(w, 2022): ", (ans_string) => {
            answer = ans_string.split(', ') 
            console.log('Utility:', answer[0], ' Year: ', answer[1], '\n');
            utilities(answer[0], answer[1])
            rl.close()
        })
    }
    if(string == 15)
    {
        console.log("Thank you for using the CCDB, Good bye!")
        rl.close();
    }    
    })








