//switch statement


//mon-9AM
//tue - thur 4AM
//fri - 9AM
//sat-sun 8AM 
let day = 'sunday';
switch(day)
   {
    case 'monday':
      console.log("9AM");
      break;
      case 'tuesday':
        case 'wednesday':
          case 'thursday':
            console.log("4AM");
            break;
            case 'friday':
              console.log("9AM");
              break;
              case 'saturday':
                case 'sunday':
                  console.log("8AM");
                  break;
    default:
    console.log("Enter the correct day");
   }
   console.log("wake up and work");
   //break -- It means jump out of the block
