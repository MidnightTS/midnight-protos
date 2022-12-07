"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameplayRecommendationReliquaryResponse = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GameplayRecommendationReliquaryMainPropData_1 = require("./GameplayRecommendationReliquaryMainPropData");
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationReliquaryResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("GameplayRecommendationReliquaryResponse", [
            { no: 11, name: "equip_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "main_prop_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GameplayRecommendationReliquaryMainPropData_1.GameplayRecommendationReliquaryMainPropData }
        ]);
    }
    create(value) {
        const message = { equipType: 0, mainPropDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 equip_type */ 11:
                    message.equipType = reader.uint32();
                    break;
                case /* repeated GameplayRecommendationReliquaryMainPropData main_prop_data_list */ 2:
                    message.mainPropDataList.push(GameplayRecommendationReliquaryMainPropData_1.GameplayRecommendationReliquaryMainPropData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 equip_type = 11; */
        if (message.equipType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.equipType);
        /* repeated GameplayRecommendationReliquaryMainPropData main_prop_data_list = 2; */
        for (let i = 0; i < message.mainPropDataList.length; i++)
            GameplayRecommendationReliquaryMainPropData_1.GameplayRecommendationReliquaryMainPropData.internalBinaryWrite(message.mainPropDataList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GameplayRecommendationReliquaryResponse
 */
exports.GameplayRecommendationReliquaryResponse = new GameplayRecommendationReliquaryResponse$Type();
