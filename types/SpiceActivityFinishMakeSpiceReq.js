"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceActivityFinishMakeSpiceReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SpiceActivityFinishMakeSpiceReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SpiceActivityFinishMakeSpiceReq", [
            { no: 11, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "left_material_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "left_turns", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, leftMaterialIdList: [], isSuccess: false, leftTurns: 0 };
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
                case /* uint32 stage_id */ 11:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated uint32 left_material_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.leftMaterialIdList.push(reader.uint32());
                    else
                        message.leftMaterialIdList.push(reader.uint32());
                    break;
                case /* bool is_success */ 10:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 left_turns */ 14:
                    message.leftTurns = reader.uint32();
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
        /* uint32 stage_id = 11; */
        if (message.stageId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.stageId);
        /* repeated uint32 left_material_id_list = 9; */
        if (message.leftMaterialIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.leftMaterialIdList.length; i++)
                writer.uint32(message.leftMaterialIdList[i]);
            writer.join();
        }
        /* bool is_success = 10; */
        if (message.isSuccess !== false)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isSuccess);
        /* uint32 left_turns = 14; */
        if (message.leftTurns !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.leftTurns);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceActivityFinishMakeSpiceReq
 */
exports.SpiceActivityFinishMakeSpiceReq = new SpiceActivityFinishMakeSpiceReq$Type();
