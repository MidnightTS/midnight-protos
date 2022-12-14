"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundationInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FoundationStatus_1 = require("./FoundationStatus");
// @generated message type with reflection information, may provide speed optimized methods
class FoundationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FoundationInfo", [
            { no: 1, name: "status", kind: "enum", T: () => ["FoundationStatus", FoundationStatus_1.FoundationStatus, "FOUNDATION_STATUS_"] },
            { no: 2, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "current_building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "locked_by_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { status: 0, uidList: [], currentBuildingId: 0, lockedByUid: 0 };
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
                case /* FoundationStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* repeated uint32 uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* uint32 current_building_id */ 3:
                    message.currentBuildingId = reader.uint32();
                    break;
                case /* uint32 locked_by_uid */ 4:
                    message.lockedByUid = reader.uint32();
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
        /* FoundationStatus status = 1; */
        if (message.status !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.status);
        /* repeated uint32 uid_list = 2; */
        if (message.uidList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* uint32 current_building_id = 3; */
        if (message.currentBuildingId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.currentBuildingId);
        /* uint32 locked_by_uid = 4; */
        if (message.lockedByUid !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lockedByUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FoundationInfo
 */
exports.FoundationInfo = new FoundationInfo$Type();
