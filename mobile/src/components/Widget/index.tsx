import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { styles } from './styles';

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOPen() {
    bottomSheetRef.current?.expand();
  }
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOPen}
      >
        <ChatTeardropDots
          size={24}
          weight={"bold"}
          color={theme.colors.text_on_brand_color}
        />

      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundSyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >

      </BottomSheet>

    </>
  );
}

export default gestureHandlerRootHOC(Widget);