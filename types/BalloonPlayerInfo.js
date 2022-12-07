"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalloonPlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BalloonPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BalloonPlayerInfo", [
            { no: 9, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "combo_disable_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curScore: 0, combo: 0, uid: 0, comboDisableTime: 0 };
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
                case /* uint32 cur_score */ 9:
                    message.curScore = reader.uint32();
                    break;
                case /* uint32 combo */ 11:
                    message.combo = reader.uint32();
                    break;
                case /* uint32 uid */ 8:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 combo_disable_time */ 7:
                    message.comboDisableTime = reader.uint32();
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
        /* uint32 cur_score = 9; */
        if (message.curScore !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curScore);
        /* uint32 combo = 11; */
        if (message.combo !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.combo);
        /* uint32 uid = 8; */
        if (message.uid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 combo_disable_time = 7; */
        if (message.comboDisableTime !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.comboDisableTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BalloonPlayerInfo
 */
exports.BalloonPlayerInfo = new BalloonPlayerInfo$Type();
