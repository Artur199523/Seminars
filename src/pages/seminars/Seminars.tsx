import React from "react"
import { useNavigate } from "react-router-dom"

import { useGetSeminarsQuery } from "store/seminars/seminars.api"

import { SeminarCard, ErrorContainer } from "components"

import styles from "./Seminars.module.scss"

const Seminars: React.FC = () => {
   const navigate = useNavigate()

   const { data, error, isSuccess, isError } = useGetSeminarsQuery()

   return (
      <React.Fragment>
         {isSuccess && data && (
            <div className={styles.seminars}>
               {React.Children.toArray(
                  data.map((seminar) => (
                     <SeminarCard onClick={() => navigate(`seminar/${seminar.id}`)} seminar={seminar} />
                  )),
               )}
            </div>
         )}
         {isError && <ErrorContainer message={error as string} />}
      </React.Fragment>
   )
}

export default Seminars
