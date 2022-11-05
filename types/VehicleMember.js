"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleMember = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VehicleMember$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleMember", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "pos", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 pos */ 3:
                    message.pos = reader.uint32();
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
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint64 avatar_guid = 2; */
        if (message.avatarGuid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 pos = 3; */
        if (message.pos !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.pos);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VehicleMember
 */
exports.VehicleMember = new VehicleMember$Type();
