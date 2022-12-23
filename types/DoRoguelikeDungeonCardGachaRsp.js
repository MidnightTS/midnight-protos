"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoRoguelikeDungeonCardGachaRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DoRoguelikeDungeonCardGachaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DoRoguelikeDungeonCardGachaRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "is_can_refresh", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isCanRefresh: false, cardList: [] };
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
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_can_refresh */ 6:
                    message.isCanRefresh = reader.bool();
                    break;
                case /* repeated uint32 card_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
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
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* bool is_can_refresh = 6; */
        if (message.isCanRefresh !== false)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isCanRefresh);
        /* repeated uint32 card_list = 15; */
        if (message.cardList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DoRoguelikeDungeonCardGachaRsp
 */
exports.DoRoguelikeDungeonCardGachaRsp = new DoRoguelikeDungeonCardGachaRsp$Type();
