"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunaRiteHintPointRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LunaRiteHintStatusType_1 = require("./LunaRiteHintStatusType");
const LunaRiteHintPoint_1 = require("./LunaRiteHintPoint");
// @generated message type with reflection information, may provide speed optimized methods
class LunaRiteHintPointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("LunaRiteHintPointRsp", [
            { no: 9, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "hint_point", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LunaRiteHintPoint_1.LunaRiteHintPoint },
            { no: 5, name: "hint_status", kind: "enum", T: () => ["LunaRiteHintStatusType", LunaRiteHintStatusType_1.LunaRiteHintStatusType, "LUNA_RITE_HINT_STATUS_TYPE_"] },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { areaId: 0, hintPoint: [], hintStatus: 0, retcode: 0 };
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
                case /* uint32 area_id */ 9:
                    message.areaId = reader.uint32();
                    break;
                case /* repeated LunaRiteHintPoint hint_point */ 11:
                    message.hintPoint.push(LunaRiteHintPoint_1.LunaRiteHintPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* LunaRiteHintStatusType hint_status */ 5:
                    message.hintStatus = reader.int32();
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
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
        /* uint32 area_id = 9; */
        if (message.areaId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.areaId);
        /* repeated LunaRiteHintPoint hint_point = 11; */
        for (let i = 0; i < message.hintPoint.length; i++)
            LunaRiteHintPoint_1.LunaRiteHintPoint.internalBinaryWrite(message.hintPoint[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* LunaRiteHintStatusType hint_status = 5; */
        if (message.hintStatus !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.hintStatus);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LunaRiteHintPointRsp
 */
exports.LunaRiteHintPointRsp = new LunaRiteHintPointRsp$Type();
