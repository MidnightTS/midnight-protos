"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoGachaReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DoGachaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("DoGachaReq", [
            { no: 14, name: "gacha_tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "gacha_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gacha_random", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { gachaTag: "", gachaScheduleId: 0, gachaType: 0, gachaRandom: 0, gachaTimes: 0 };
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
                case /* string gacha_tag */ 14:
                    message.gachaTag = reader.string();
                    break;
                case /* uint32 gacha_schedule_id */ 6:
                    message.gachaScheduleId = reader.uint32();
                    break;
                case /* uint32 gacha_type */ 1:
                    message.gachaType = reader.uint32();
                    break;
                case /* uint32 gacha_random */ 9:
                    message.gachaRandom = reader.uint32();
                    break;
                case /* uint32 gacha_times */ 3:
                    message.gachaTimes = reader.uint32();
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
        /* string gacha_tag = 14; */
        if (message.gachaTag !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.gachaTag);
        /* uint32 gacha_schedule_id = 6; */
        if (message.gachaScheduleId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.gachaScheduleId);
        /* uint32 gacha_type = 1; */
        if (message.gachaType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gachaType);
        /* uint32 gacha_random = 9; */
        if (message.gachaRandom !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gachaRandom);
        /* uint32 gacha_times = 3; */
        if (message.gachaTimes !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.gachaTimes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DoGachaReq
 */
exports.DoGachaReq = new DoGachaReq$Type();
