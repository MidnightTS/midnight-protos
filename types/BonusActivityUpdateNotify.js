"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonusActivityUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BonusActivityInfo_1 = require("./BonusActivityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BonusActivityUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BonusActivityUpdateNotify", [
            { no: 7, name: "bonus_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BonusActivityInfo_1.BonusActivityInfo }
        ]);
    }
    create(value) {
        const message = { bonusActivityInfoList: [] };
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
                case /* repeated BonusActivityInfo bonus_activity_info_list */ 7:
                    message.bonusActivityInfoList.push(BonusActivityInfo_1.BonusActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated BonusActivityInfo bonus_activity_info_list = 7; */
        for (let i = 0; i < message.bonusActivityInfoList.length; i++)
            BonusActivityInfo_1.BonusActivityInfo.internalBinaryWrite(message.bonusActivityInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BonusActivityUpdateNotify
 */
exports.BonusActivityUpdateNotify = new BonusActivityUpdateNotify$Type();
