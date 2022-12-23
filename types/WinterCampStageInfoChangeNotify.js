"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampStageInfoChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WinterCampStageInfo_1 = require("./WinterCampStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampStageInfoChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampStageInfoChangeNotify", [
            { no: 5, name: "explore_info", kind: "message", T: () => WinterCampStageInfo_1.WinterCampStageInfo },
            { no: 15, name: "battle_info", kind: "message", T: () => WinterCampStageInfo_1.WinterCampStageInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* WinterCampStageInfo explore_info */ 5:
                    message.exploreInfo = WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.exploreInfo);
                    break;
                case /* WinterCampStageInfo battle_info */ 15:
                    message.battleInfo = WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.battleInfo);
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
        /* WinterCampStageInfo explore_info = 5; */
        if (message.exploreInfo)
            WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryWrite(message.exploreInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WinterCampStageInfo battle_info = 15; */
        if (message.battleInfo)
            WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryWrite(message.battleInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampStageInfoChangeNotify
 */
exports.WinterCampStageInfoChangeNotify = new WinterCampStageInfoChangeNotify$Type();
