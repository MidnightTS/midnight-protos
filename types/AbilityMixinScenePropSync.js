"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinScenePropSync = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MassivePropSyncInfo_1 = require("./MassivePropSyncInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinScenePropSync$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinScenePropSync", [
            { no: 11, name: "massive_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropSyncInfo_1.MassivePropSyncInfo },
            { no: 12, name: "delete_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "is_clear_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { massivePropList: [], deleteIdList: [], isClearAll: false };
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
                case /* repeated MassivePropSyncInfo massive_prop_list */ 11:
                    message.massivePropList.push(MassivePropSyncInfo_1.MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated int64 delete_id_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteIdList.push(reader.int64().toBigInt());
                    else
                        message.deleteIdList.push(reader.int64().toBigInt());
                    break;
                case /* bool is_clear_all */ 3:
                    message.isClearAll = reader.bool();
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
        /* repeated MassivePropSyncInfo massive_prop_list = 11; */
        for (let i = 0; i < message.massivePropList.length; i++)
            MassivePropSyncInfo_1.MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated int64 delete_id_list = 12; */
        if (message.deleteIdList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.deleteIdList.length; i++)
                writer.int64(message.deleteIdList[i]);
            writer.join();
        }
        /* bool is_clear_all = 3; */
        if (message.isClearAll !== false)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isClearAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinScenePropSync
 */
exports.AbilityMixinScenePropSync = new AbilityMixinScenePropSync$Type();
