"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunaRiteDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LunaRiteAreaInfo_1 = require("./LunaRiteAreaInfo");
const LunaRiteHintPoint_1 = require("./LunaRiteHintPoint");
// @generated message type with reflection information, may provide speed optimized methods
class LunaRiteDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LunaRiteDetailInfo", [
            { no: 4, name: "hint_point", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LunaRiteHintPoint_1.LunaRiteHintPoint },
            { no: 7, name: "area_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LunaRiteAreaInfo_1.LunaRiteAreaInfo }
        ]);
    }
    create(value) {
        const message = { hintPoint: [], areaInfoList: [] };
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
                case /* repeated LunaRiteHintPoint hint_point */ 4:
                    message.hintPoint.push(LunaRiteHintPoint_1.LunaRiteHintPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated LunaRiteAreaInfo area_info_list */ 7:
                    message.areaInfoList.push(LunaRiteAreaInfo_1.LunaRiteAreaInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated LunaRiteHintPoint hint_point = 4; */
        for (let i = 0; i < message.hintPoint.length; i++)
            LunaRiteHintPoint_1.LunaRiteHintPoint.internalBinaryWrite(message.hintPoint[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated LunaRiteAreaInfo area_info_list = 7; */
        for (let i = 0; i < message.areaInfoList.length; i++)
            LunaRiteAreaInfo_1.LunaRiteAreaInfo.internalBinaryWrite(message.areaInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LunaRiteDetailInfo
 */
exports.LunaRiteDetailInfo = new LunaRiteDetailInfo$Type();
