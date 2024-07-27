import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledError,
  StyledFilterAndSearchContainer,
  StyledFilterContainer,
  StyledHomeContainer,
  StyledSearchInput,
  StyledSecondaryCardsContainer,
  StyledSkeletonContainer,
} from "./home.styled";
import MainCard from "../../components/primaryCard";
import SecondaryCard from "../../components/secondaryCard";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSecondaryCardsData,
  getSecondaryCardsData,
} from "../../redux/actions/homeActions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  calculateLastPageNumber,
  extractUniqueLocationOptions,
  extractUniqueTypeOptions,
} from "../../utils";
import Footer from "../../components/footer";
import StyledSelect from "../../components/select";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const data = useSelector((state) => state?.home?.responseData);
  const allData = useSelector((state) => state?.home?.responseAllData);
  const loading = useSelector((state) => state?.home?.loading);
  const error = useSelector((state) => state?.home?.error);
  const filterByTypeOptions = extractUniqueTypeOptions(allData);
  const filterByLocationOptions = extractUniqueLocationOptions(allData);
  const lastPageNumber = calculateLastPageNumber(allData);

  useEffect(() => {
    dispatch(getAllSecondaryCardsData(type, location, search));
  }, [type, location, search]);

  useEffect(() => {
    dispatch(getSecondaryCardsData(pageNumber, type, location, search));
  }, [pageNumber, type, location, search]);

  const handleNextButton = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousButton = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleFilterByTypeChange = (option) => {
    setPageNumber(1);
    setType(option?.value ?? "");
  };

  const handleFilterByLocationChange = (option) => {
    setPageNumber(1);
    setLocation(option?.value ?? "");
  };

  const handleSearchQuery = (event) => {
    const { value } = event.target;
    setLocation("");
    setType("");
    setSearch(value);
  };

  return (
    <StyledHomeContainer>
      <MainCard />
      <StyledFilterAndSearchContainer>
        <StyledFilterContainer>
          <StyledSelect
            options={filterByLocationOptions}
            onChange={handleFilterByLocationChange}
            placeholder={STRINGS.LOCATION_FILTER_PLACEHOLDER}
          />
          <StyledSelect
            options={filterByTypeOptions}
            onChange={handleFilterByTypeChange}
            placeholder={STRINGS.TYPE_FILTER_PLACEHOLDER}
          />
        </StyledFilterContainer>
        <StyledSearchInput
          placeholder={STRINGS.SEARCH_FILTER_PLACEHOLDER}
          onChange={handleSearchQuery}
        />
      </StyledFilterAndSearchContainer>
      {error && <StyledError>{STRINGS.ERROR_MESSAGE}</StyledError>}
      {loading && !error && (
        <StyledSkeletonContainer>
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index} height="300px" width="320px" />
          ))}
        </StyledSkeletonContainer>
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
        {!loading && !error && !(pageNumber === lastPageNumber) && (
          <StyledButton role={STRINGS.ROLE_BUTTON} onClick={handleNextButton}>
            {STRINGS.NEXT_BUTTON_TEXT}
          </StyledButton>
        )}
      </StyledButtonsContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default HomeContainer;
