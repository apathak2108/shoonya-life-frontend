import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledError,
  StyledFilterAndSearchContainer,
  StyledFilterContainer,
  StyledHomeContainer,
  StyledSearchContainer,
  StyledSecondaryCardsContainer,
  StyledSelect,
} from "./home.styled";
import MainCard from "../../components/primaryCard";
import SecondaryCard from "../../components/secondaryCard";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import { getSecondaryCardsData } from "../../redux/actions/homeActions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const data = useSelector((state) => state?.home?.responseData);
  const loading = useSelector((state) => state?.home?.loading);
  const error = useSelector((state) => state?.home?.error);

  const extractUniqueTags = (events) => {
    const allTags = events?.flatMap((event) => event?.tag);
    const uniqueTags = [...new Set(allTags)];
    const tagOptions = uniqueTags?.map((tag) => ({
      value: tag,
      label: tag.charAt(0).toUpperCase() + tag.slice(1),
    }));
    return tagOptions;
  };

  const filterByTypeOptions = extractUniqueTags(data);

  useEffect(() => {
    dispatch(getSecondaryCardsData(pageNumber));
  }, [pageNumber]);

  const handleNextButton = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousButton = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <StyledHomeContainer>
      <MainCard />
      <StyledFilterAndSearchContainer>
        <StyledFilterContainer>
          <StyledSelect
            // options={}
            placeholder={STRINGS.DATE_FILTER_PLACEHOLDER}
          />
          <StyledSelect
            options={filterByTypeOptions}
            placeholder={STRINGS.TYPE_FILTER_PLACEHOLDER}
          />
        </StyledFilterContainer>
        <StyledSearchContainer
          placeholder={STRINGS.SEARCH_FILTER_PLACEHOLDER}
        />
      </StyledFilterAndSearchContainer>
      {error && <StyledError>{STRINGS.ERROR_MESSAGE}</StyledError>}
      {loading && !error && (
        <StyledSecondaryCardsContainer
          style={{ justifyContent: "space-between" }}
        >
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index} height="310px" width="320px" />
          ))}
        </StyledSecondaryCardsContainer>
      )}
      {!loading && !error && (
        <StyledSecondaryCardsContainer>
          {data?.map((currentCard, index) => (
            <SecondaryCard
              key={index}
              image={currentCard?.image}
              heading={currentCard?.title}
              description={currentCard?.description}
              timestamp={currentCard?.date}
              location={currentCard?.location}
              price={currentCard?.price}
            />
          ))}
        </StyledSecondaryCardsContainer>
      )}
      <StyledButtonsContainer>
        {!loading && !(pageNumber === 1) && !error && (
          <StyledButton
            role={STRINGS.ROLE_BUTTON}
            onClick={handlePreviousButton}
          >
            {STRINGS.PREV_BUTTON_TEXT}
          </StyledButton>
        )}
        {!loading && !error && !(data?.length < 3) && (
          <StyledButton role={STRINGS.ROLE_BUTTON} onClick={handleNextButton}>
            {STRINGS.NEXT_BUTTON_TEXT}
          </StyledButton>
        )}
      </StyledButtonsContainer>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
