"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MaterialDeleteInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialDeleteInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MaterialDeleteInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MaterialDeleteInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MaterialDeleteInfo_one_of_decls.set(this, [[2, 3, 4]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MaterialDeleteInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("has_delete_config" in data && data.has_delete_config != undefined) {
                this.has_delete_config = data.has_delete_config;
            }
            if ("count_down_delete" in data && data.count_down_delete != undefined) {
                this.count_down_delete = data.count_down_delete;
            }
            if ("date_delete" in data && data.date_delete != undefined) {
                this.date_delete = data.date_delete;
            }
            if ("delay_week_count_down_delete" in data && data.delay_week_count_down_delete != undefined) {
                this.delay_week_count_down_delete = data.delay_week_count_down_delete;
            }
        }
    }
    get has_delete_config() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set has_delete_config(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get count_down_delete() {
        return pb_1.Message.getWrapperField(this, MaterialDeleteInfo.CountDownDelete, 2);
    }
    set count_down_delete(value) {
        pb_1.Message.setOneofWrapperField(this, 2, __classPrivateFieldGet(this, _MaterialDeleteInfo_one_of_decls, "f")[0], value);
    }
    get has_count_down_delete() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get date_delete() {
        return pb_1.Message.getWrapperField(this, MaterialDeleteInfo.DateTimeDelete, 3);
    }
    set date_delete(value) {
        pb_1.Message.setOneofWrapperField(this, 3, __classPrivateFieldGet(this, _MaterialDeleteInfo_one_of_decls, "f")[0], value);
    }
    get has_date_delete() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get delay_week_count_down_delete() {
        return pb_1.Message.getWrapperField(this, MaterialDeleteInfo.DelayWeekCountDownDelete, 4);
    }
    set delay_week_count_down_delete(value) {
        pb_1.Message.setOneofWrapperField(this, 4, __classPrivateFieldGet(this, _MaterialDeleteInfo_one_of_decls, "f")[0], value);
    }
    get has_delay_week_count_down_delete() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get delete_info() {
        const cases = {
            0: "none",
            2: "count_down_delete",
            3: "date_delete",
            4: "delay_week_count_down_delete"
        };
        return cases[pb_1.Message.computeOneofCase(this, [2, 3, 4])];
    }
    static fromObject(data) {
        const message = new MaterialDeleteInfo({});
        if (data.has_delete_config != null) {
            message.has_delete_config = data.has_delete_config;
        }
        if (data.count_down_delete != null) {
            message.count_down_delete = MaterialDeleteInfo.CountDownDelete.fromObject(data.count_down_delete);
        }
        if (data.date_delete != null) {
            message.date_delete = MaterialDeleteInfo.DateTimeDelete.fromObject(data.date_delete);
        }
        if (data.delay_week_count_down_delete != null) {
            message.delay_week_count_down_delete = MaterialDeleteInfo.DelayWeekCountDownDelete.fromObject(data.delay_week_count_down_delete);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.has_delete_config != null) {
            data.has_delete_config = this.has_delete_config;
        }
        if (this.count_down_delete != null) {
            data.count_down_delete = this.count_down_delete.toObject();
        }
        if (this.date_delete != null) {
            data.date_delete = this.date_delete.toObject();
        }
        if (this.delay_week_count_down_delete != null) {
            data.delay_week_count_down_delete = this.delay_week_count_down_delete.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_delete_config != false)
            writer.writeBool(1, this.has_delete_config);
        if (this.has_count_down_delete)
            writer.writeMessage(2, this.count_down_delete, () => this.count_down_delete.serialize(writer));
        if (this.has_date_delete)
            writer.writeMessage(3, this.date_delete, () => this.date_delete.serialize(writer));
        if (this.has_delay_week_count_down_delete)
            writer.writeMessage(4, this.delay_week_count_down_delete, () => this.delay_week_count_down_delete.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MaterialDeleteInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.has_delete_config = reader.readBool();
                    break;
                case 2:
                    reader.readMessage(message.count_down_delete, () => message.count_down_delete = MaterialDeleteInfo.CountDownDelete.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.date_delete, () => message.date_delete = MaterialDeleteInfo.DateTimeDelete.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.delay_week_count_down_delete, () => message.delay_week_count_down_delete = MaterialDeleteInfo.DelayWeekCountDownDelete.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MaterialDeleteInfo.deserialize(bytes);
    }
}
exports.MaterialDeleteInfo = MaterialDeleteInfo;
_MaterialDeleteInfo_one_of_decls = new WeakMap();
(function (MaterialDeleteInfo) {
    var _CountDownDelete_one_of_decls, _DateTimeDelete_one_of_decls, _DelayWeekCountDownDelete_one_of_decls;
    class CountDownDelete extends pb_1.Message {
        constructor(data) {
            super();
            _CountDownDelete_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CountDownDelete_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("delete_time_num_map" in data && data.delete_time_num_map != undefined) {
                    this.delete_time_num_map = data.delete_time_num_map;
                }
                if ("config_count_down_time" in data && data.config_count_down_time != undefined) {
                    this.config_count_down_time = data.config_count_down_time;
                }
            }
            if (!this.delete_time_num_map)
                this.delete_time_num_map = new Map();
        }
        get delete_time_num_map() {
            return pb_1.Message.getField(this, 1);
        }
        set delete_time_num_map(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get config_count_down_time() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        }
        set config_count_down_time(value) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data) {
            const message = new CountDownDelete({});
            if (typeof data.delete_time_num_map == "object") {
                message.delete_time_num_map = new Map(Object.entries(data.delete_time_num_map).map(([key, value]) => [Number(key), value]));
            }
            if (data.config_count_down_time != null) {
                message.config_count_down_time = data.config_count_down_time;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.delete_time_num_map.size > 0) {
                data.delete_time_num_map = (Object.fromEntries)(this.delete_time_num_map);
            }
            if (this.config_count_down_time != null) {
                data.config_count_down_time = this.config_count_down_time;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            for (const [key, value] of this.delete_time_num_map) {
                writer.writeMessage(1, this.delete_time_num_map, () => {
                    writer.writeUint32(1, key);
                    writer.writeUint32(2, value);
                });
            }
            if (this.config_count_down_time != 0)
                writer.writeUint32(2, this.config_count_down_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CountDownDelete();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.delete_time_num_map, reader, reader.readUint32, reader.readUint32));
                        break;
                    case 2:
                        message.config_count_down_time = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return CountDownDelete.deserialize(bytes);
        }
    }
    _CountDownDelete_one_of_decls = new WeakMap();
    MaterialDeleteInfo.CountDownDelete = CountDownDelete;
    class DateTimeDelete extends pb_1.Message {
        constructor(data) {
            super();
            _DateTimeDelete_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DateTimeDelete_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("delete_time" in data && data.delete_time != undefined) {
                    this.delete_time = data.delete_time;
                }
            }
        }
        get delete_time() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        }
        set delete_time(value) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data) {
            const message = new DateTimeDelete({});
            if (data.delete_time != null) {
                message.delete_time = data.delete_time;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.delete_time != null) {
                data.delete_time = this.delete_time;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (this.delete_time != 0)
                writer.writeUint32(1, this.delete_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DateTimeDelete();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.delete_time = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return DateTimeDelete.deserialize(bytes);
        }
    }
    _DateTimeDelete_one_of_decls = new WeakMap();
    MaterialDeleteInfo.DateTimeDelete = DateTimeDelete;
    class DelayWeekCountDownDelete extends pb_1.Message {
        constructor(data) {
            super();
            _DelayWeekCountDownDelete_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DelayWeekCountDownDelete_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("delete_time_num_map" in data && data.delete_time_num_map != undefined) {
                    this.delete_time_num_map = data.delete_time_num_map;
                }
                if ("config_delay_week" in data && data.config_delay_week != undefined) {
                    this.config_delay_week = data.config_delay_week;
                }
                if ("config_count_down_time" in data && data.config_count_down_time != undefined) {
                    this.config_count_down_time = data.config_count_down_time;
                }
            }
            if (!this.delete_time_num_map)
                this.delete_time_num_map = new Map();
        }
        get delete_time_num_map() {
            return pb_1.Message.getField(this, 1);
        }
        set delete_time_num_map(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get config_delay_week() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        }
        set config_delay_week(value) {
            pb_1.Message.setField(this, 2, value);
        }
        get config_count_down_time() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0);
        }
        set config_count_down_time(value) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data) {
            const message = new DelayWeekCountDownDelete({});
            if (typeof data.delete_time_num_map == "object") {
                message.delete_time_num_map = new Map(Object.entries(data.delete_time_num_map).map(([key, value]) => [Number(key), value]));
            }
            if (data.config_delay_week != null) {
                message.config_delay_week = data.config_delay_week;
            }
            if (data.config_count_down_time != null) {
                message.config_count_down_time = data.config_count_down_time;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.delete_time_num_map.size > 0) {
                data.delete_time_num_map = (Object.fromEntries)(this.delete_time_num_map);
            }
            if (this.config_delay_week != null) {
                data.config_delay_week = this.config_delay_week;
            }
            if (this.config_count_down_time != null) {
                data.config_count_down_time = this.config_count_down_time;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            for (const [key, value] of this.delete_time_num_map) {
                writer.writeMessage(1, this.delete_time_num_map, () => {
                    writer.writeUint32(1, key);
                    writer.writeUint32(2, value);
                });
            }
            if (this.config_delay_week != 0)
                writer.writeUint32(2, this.config_delay_week);
            if (this.config_count_down_time != 0)
                writer.writeUint32(3, this.config_count_down_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DelayWeekCountDownDelete();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.delete_time_num_map, reader, reader.readUint32, reader.readUint32));
                        break;
                    case 2:
                        message.config_delay_week = reader.readUint32();
                        break;
                    case 3:
                        message.config_count_down_time = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary() {
            return this.serialize();
        }
        static deserializeBinary(bytes) {
            return DelayWeekCountDownDelete.deserialize(bytes);
        }
    }
    _DelayWeekCountDownDelete_one_of_decls = new WeakMap();
    MaterialDeleteInfo.DelayWeekCountDownDelete = DelayWeekCountDownDelete;
})(MaterialDeleteInfo = exports.MaterialDeleteInfo || (exports.MaterialDeleteInfo = {}));
