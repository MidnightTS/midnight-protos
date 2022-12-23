"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampRaceStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampRaceStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampRaceStageInfo", [
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { id: 0, openTime: 0, maxScore: 0 };
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
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* Vector pos */ 6:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 open_time */ 5:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 max_score */ 4:
                    message.maxScore = reader.uint32();
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
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.id);
        /* Vector pos = 6; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 open_time = 5; */
        if (message.openTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 max_score = 4; */
        if (message.maxScore !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.maxScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampRaceStageInfo
 */
exports.WinterCampRaceStageInfo = new WinterCampRaceStageInfo$Type();
