import React, { useEffect } from "react";
import styles from "./Dog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, setLoading } from "../../store/actions";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

const Dog = (props) => {
  const id = props.match.params.id;
  const loading = useSelector((store) => store.dogs.loading);
  const dogDetails = useSelector((state) => state.dogs.dogDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className={styles.card}>
        {loading && <Loading />}
        {dogDetails && (
          <>
            <img src={dogDetails.image} alt={dogDetails.name} />
            <div className={styles.contend}>
              <h2>{dogDetails.name}</h2>
              <h4>Height:</h4>
              <p>{`${dogDetails.height} Inches`}</p>
              <h4>Weight:</h4>
              <p>{dogDetails.weight} Pounds</p>
              <h4 className={styles.tempsTitle}>Temperaments:</h4>
              <p className={styles.temps}>{dogDetails.temperament}</p>
              <h4>Life Span:</h4>
              <p>{dogDetails.years}</p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Dog;
