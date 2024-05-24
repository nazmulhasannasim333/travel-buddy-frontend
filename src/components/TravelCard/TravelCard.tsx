// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
// } from "@mui/material";
// import Link from "next/link";

// const TravelCard = ({ trip }) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={trip.photo || "/images/default.jpg"}
//         alt={trip.destination}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {trip.destination}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           {trip.description}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Dates: {new Date(trip.startDate).toLocaleDateString()} -{" "}
//           {new Date(trip.endDate).toLocaleDateString()}
//         </Typography>
//         <Link href={`/travel-details/${trip.id}`} passHref>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </Link>
//       </CardContent>
//     </Card>
//   );
// };

// export default TravelCard;
