"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleLocationInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class VehicleLocationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VehicleLocationInfo", [
            { no: 5, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 11, name: "owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cur_hp", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 1, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "max_hp", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { ownerUid: 0, uidList: [], curHp: 0, gadgetId: 0, entityId: 0, maxHp: 0 };
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
                case /* Vector rot */ 5:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* uint32 owner_uid */ 11:
                    message.ownerUid = reader.uint32();
                    break;
                case /* repeated uint32 uid_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* float cur_hp */ 2:
                    message.curHp = reader.float();
                    break;
                case /* Vector pos */ 9:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 gadget_id */ 1:
                    message.gadgetId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* float max_hp */ 15:
                    message.maxHp = reader.float();
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
        /* Vector rot = 5; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 owner_uid = 11; */
        if (message.ownerUid !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.ownerUid);
        /* repeated uint32 uid_list = 4; */
        if (message.uidList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* float cur_hp = 2; */
        if (message.curHp !== 0)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.curHp);
        /* Vector pos = 9; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gadget_id = 1; */
        if (message.gadgetId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.gadgetId);
        /* uint32 entity_id = 14; */
        if (message.entityId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.entityId);
        /* float max_hp = 15; */
        if (message.maxHp !== 0)
            writer.tag(15, runtime_2.WireType.Bit32).float(message.maxHp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VehicleLocationInfo
 */
exports.VehicleLocationInfo = new VehicleLocationInfo$Type();
