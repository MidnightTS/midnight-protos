"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class SignInData$Type extends runtime_5.MessageType {
    constructor() {
        super("SignInData", [
            { no: 4, name: "day_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "reward_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { dayCount: 0, rewardItemList: [] };
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
                case /* uint32 day_count */ 4:
                    message.dayCount = reader.uint32();
                    break;
                case /* repeated ItemParam reward_item_list */ 15:
                    message.rewardItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 day_count = 4; */
        if (message.dayCount !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.dayCount);
        /* repeated ItemParam reward_item_list = 15; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SignInData
 */
exports.SignInData = new SignInData$Type();
