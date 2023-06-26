import { useState, useCallback } from 'react';
import axios from 'axios';

const sleep = async (ms) => new window.Promise((r) => setTimeout(r, ms));

const useFetchReturn = (url, method = 'get', headers, params) => {
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = useCallback(
    async (data, dynamicUrl, timeout = 30000, delay = null) => {
      setIsFetching(true);

      const result = {
        response: null,
        error: null,
      };

      try {
        if (typeof delay === 'number') {
          await sleep(delay);
        }

        const response = await axios.request({
          url: dynamicUrl || url,
          data,
          method,
          timeout,
          headers,
          params,
        });

        if (response.status < 200 || response.status >= 300) {
          result.error = 'Неизвестная ошибка';
        } else {
          result.response = response.data;
        }
      } catch (err) {
        result.error = err?.response?.data || err?.toString() || 'Неизвестная ошибка';
      } finally {
        setIsFetching(false);
      }

      return result;
    },
    [url, method, headers, params],
  );

  return [fetchData, isFetching];
};

export { useFetchReturn };
