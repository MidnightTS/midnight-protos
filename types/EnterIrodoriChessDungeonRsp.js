"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterIrodoriChessDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EnterIrodoriChessDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterIrodoriChessDungeonRsp", [
            { no: 5, name: "is_hard_map", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { isHardMap: false, levelId: 0, retcode: 0 };
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
                case /* bool is_hard_map */ 5:
                    message.isHardMap = reader.bool();
                    break;
                case /* uint32 level_id */ 15:
                    message.levelId = reader.uint32();
                    break;
                case /* int32 retcode */ 8:
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
        /* bool is_hard_map = 5; */
        if (message.isHardMap !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isHardMap);
        /* uint32 level_id = 15; */
        if (message.levelId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.levelId);
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterIrodoriChessDungeonRsp
 */
exports.EnterIrodoriChessDungeonRsp = new EnterIrodoriChessDungeonRsp$Type();
