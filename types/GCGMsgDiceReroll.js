"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgDiceReroll = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDiceSideType_1 = require("./GCGDiceSideType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgDiceReroll$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgDiceReroll", [
            { no: 1, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "dice_side_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["GCGDiceSideType", GCGDiceSideType_1.GCGDiceSideType] },
            { no: 12, name: "select_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { controllerId: 0, diceSideList: [], selectDiceIndexList: [] };
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
                case /* uint32 controller_id */ 1:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated GCGDiceSideType dice_side_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceSideList.push(reader.int32());
                    else
                        message.diceSideList.push(reader.int32());
                    break;
                case /* repeated uint32 select_dice_index_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectDiceIndexList.push(reader.uint32());
                    else
                        message.selectDiceIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 controller_id = 1; */
        if (message.controllerId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.controllerId);
        /* repeated GCGDiceSideType dice_side_list = 8; */
        if (message.diceSideList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceSideList.length; i++)
                writer.int32(message.diceSideList[i]);
            writer.join();
        }
        /* repeated uint32 select_dice_index_list = 12; */
        if (message.selectDiceIndexList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectDiceIndexList.length; i++)
                writer.uint32(message.selectDiceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgDiceReroll
 */
exports.GCGMsgDiceReroll = new GCGMsgDiceReroll$Type();
