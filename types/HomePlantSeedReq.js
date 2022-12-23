"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePlantSeedReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantSeedReq$Type extends runtime_5.MessageType {
    constructor() {
        super("HomePlantSeedReq", [
            { no: 7, name: "seed_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "field_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { seedIdList: [], fieldGuid: 0, index: 0 };
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
                case /* repeated uint32 seed_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seedIdList.push(reader.uint32());
                    else
                        message.seedIdList.push(reader.uint32());
                    break;
                case /* uint32 field_guid */ 1:
                    message.fieldGuid = reader.uint32();
                    break;
                case /* uint32 index */ 9:
                    message.index = reader.uint32();
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
        /* repeated uint32 seed_id_list = 7; */
        if (message.seedIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seedIdList.length; i++)
                writer.uint32(message.seedIdList[i]);
            writer.join();
        }
        /* uint32 field_guid = 1; */
        if (message.fieldGuid !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.fieldGuid);
        /* uint32 index = 9; */
        if (message.index !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePlantSeedReq
 */
exports.HomePlantSeedReq = new HomePlantSeedReq$Type();
